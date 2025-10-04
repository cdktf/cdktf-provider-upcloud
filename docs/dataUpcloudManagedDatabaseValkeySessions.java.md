# `dataUpcloudManagedDatabaseValkeySessions` Submodule <a name="`dataUpcloudManagedDatabaseValkeySessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseValkeySessions <a name="DataUpcloudManagedDatabaseValkeySessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions upcloud_managed_database_valkey_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessions;

DataUpcloudManagedDatabaseValkeySessions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .offset(java.lang.Number)
//  .order(java.lang.String)
//  .sessions(IResolvable)
//  .sessions(java.util.List<DataUpcloudManagedDatabaseValkeySessionsSessions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.limit">limit</a></code> | <code>java.lang.Number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.offset">offset</a></code> | <code>java.lang.Number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.sessions">sessions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>></code> | sessions block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#service DataUpcloudManagedDatabaseValkeySessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.limit"></a>

- *Type:* java.lang.Number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#limit DataUpcloudManagedDatabaseValkeySessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.offset"></a>

- *Type:* java.lang.Number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#offset DataUpcloudManagedDatabaseValkeySessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#order DataUpcloudManagedDatabaseValkeySessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.Initializer.parameter.sessions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>>

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#sessions DataUpcloudManagedDatabaseValkeySessions#sessions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions">putSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions">resetSessions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSessions` <a name="putSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions"></a>

```java
public void putSessions(IResolvable OR java.util.List<DataUpcloudManagedDatabaseValkeySessionsSessions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.putSessions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetId"></a>

```java
public void resetId()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOffset"></a>

```java
public void resetOffset()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSessions` <a name="resetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.resetSessions"></a>

```java
public void resetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessions;

DataUpcloudManagedDatabaseValkeySessions.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessions;

DataUpcloudManagedDatabaseValkeySessions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessions;

DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessions;

DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseValkeySessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataUpcloudManagedDatabaseValkeySessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataUpcloudManagedDatabaseValkeySessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseValkeySessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions">sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput">sessionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `sessions`<sup>Required</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessions"></a>

```java
public DataUpcloudManagedDatabaseValkeySessionsSessionsList getSessions();
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList">DataUpcloudManagedDatabaseValkeySessionsSessionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sessionsInput`<sup>Optional</sup> <a name="sessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.sessionsInput"></a>

```java
public java.lang.Object getSessionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseValkeySessionsConfig <a name="DataUpcloudManagedDatabaseValkeySessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessionsConfig;

DataUpcloudManagedDatabaseValkeySessionsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .limit(java.lang.Number)
//  .offset(java.lang.Number)
//  .order(java.lang.String)
//  .sessions(IResolvable)
//  .sessions(java.util.List<DataUpcloudManagedDatabaseValkeySessionsSessions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service">service</a></code> | <code>java.lang.String</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit">limit</a></code> | <code>java.lang.Number</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset">offset</a></code> | <code>java.lang.Number</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions">sessions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>></code> | sessions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#service DataUpcloudManagedDatabaseValkeySessions#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#id DataUpcloudManagedDatabaseValkeySessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#limit DataUpcloudManagedDatabaseValkeySessions#limit}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#offset DataUpcloudManagedDatabaseValkeySessions#offset}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#order DataUpcloudManagedDatabaseValkeySessions#order}

---

##### `sessions`<sup>Optional</sup> <a name="sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsConfig.property.sessions"></a>

```java
public java.lang.Object getSessions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>>

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.28.0/docs/data-sources/managed_database_valkey_sessions#sessions DataUpcloudManagedDatabaseValkeySessions#sessions}

---

### DataUpcloudManagedDatabaseValkeySessionsSessions <a name="DataUpcloudManagedDatabaseValkeySessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessionsSessions;

DataUpcloudManagedDatabaseValkeySessionsSessions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseValkeySessionsSessionsList <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList;

new DataUpcloudManagedDatabaseValkeySessionsSessionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get"></a>

```java
public DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>>

---


### DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.data_upcloud_managed_database_valkey_sessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference;

new DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions">activeChannelSubscriptions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase">activeDatabase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">activePatternMatchingChannelSubscriptions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr">clientAddr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge">connectionAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle">connectionIdle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags">flags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw">flagsRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands">multiExecCommands</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer">outputBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory">outputBufferMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength">outputListLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer">queryBuffer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree">queryBufferFree</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeChannelSubscriptions`<sup>Required</sup> <a name="activeChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```java
public java.lang.Number getActiveChannelSubscriptions();
```

- *Type:* java.lang.Number

---

##### `activeDatabase`<sup>Required</sup> <a name="activeDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activeDatabase"></a>

```java
public java.lang.String getActiveDatabase();
```

- *Type:* java.lang.String

---

##### `activePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="activePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```java
public java.lang.Number getActivePatternMatchingChannelSubscriptions();
```

- *Type:* java.lang.Number

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `clientAddr`<sup>Required</sup> <a name="clientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.clientAddr"></a>

```java
public java.lang.String getClientAddr();
```

- *Type:* java.lang.String

---

##### `connectionAge`<sup>Required</sup> <a name="connectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionAge"></a>

```java
public java.lang.Number getConnectionAge();
```

- *Type:* java.lang.Number

---

##### `connectionIdle`<sup>Required</sup> <a name="connectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.connectionIdle"></a>

```java
public java.lang.Number getConnectionIdle();
```

- *Type:* java.lang.Number

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flags"></a>

```java
public java.util.List<java.lang.String> getFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `flagsRaw`<sup>Required</sup> <a name="flagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.flagsRaw"></a>

```java
public java.lang.String getFlagsRaw();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multiExecCommands`<sup>Required</sup> <a name="multiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.multiExecCommands"></a>

```java
public java.lang.Number getMultiExecCommands();
```

- *Type:* java.lang.Number

---

##### `outputBuffer`<sup>Required</sup> <a name="outputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBuffer"></a>

```java
public java.lang.Number getOutputBuffer();
```

- *Type:* java.lang.Number

---

##### `outputBufferMemory`<sup>Required</sup> <a name="outputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputBufferMemory"></a>

```java
public java.lang.Number getOutputBufferMemory();
```

- *Type:* java.lang.Number

---

##### `outputListLength`<sup>Required</sup> <a name="outputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.outputListLength"></a>

```java
public java.lang.Number getOutputListLength();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `queryBuffer`<sup>Required</sup> <a name="queryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBuffer"></a>

```java
public java.lang.Number getQueryBuffer();
```

- *Type:* java.lang.Number

---

##### `queryBufferFree`<sup>Required</sup> <a name="queryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.queryBufferFree"></a>

```java
public java.lang.Number getQueryBufferFree();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseValkeySessions.DataUpcloudManagedDatabaseValkeySessionsSessions">DataUpcloudManagedDatabaseValkeySessionsSessions</a>

---



