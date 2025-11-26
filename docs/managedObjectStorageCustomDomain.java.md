# `managedObjectStorageCustomDomain` Submodule <a name="`managedObjectStorageCustomDomain` Submodule" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedObjectStorageCustomDomain <a name="ManagedObjectStorageCustomDomain" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain upcloud_managed_object_storage_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomain;

ManagedObjectStorageCustomDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .serviceUuid(java.lang.String)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Must be a subdomain and consist of 3 to 5 parts such as objects.example.com. Cannot be root-level domain e.g. example.com. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.serviceUuid">serviceUuid</a></code> | <code>java.lang.String</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | At the moment only `public` is accepted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Must be a subdomain and consist of 3 to 5 parts such as objects.example.com. Cannot be root-level domain e.g. example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#domain_name ManagedObjectStorageCustomDomain#domain_name}

---

##### `serviceUuid`<sup>Required</sup> <a name="serviceUuid" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.serviceUuid"></a>

- *Type:* java.lang.String

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#service_uuid ManagedObjectStorageCustomDomain#service_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.Initializer.parameter.type"></a>

- *Type:* java.lang.String

At the moment only `public` is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#type ManagedObjectStorageCustomDomain#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedObjectStorageCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomain;

ManagedObjectStorageCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomain;

ManagedObjectStorageCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomain;

ManagedObjectStorageCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomain;

ManagedObjectStorageCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedObjectStorageCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedObjectStorageCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedObjectStorageCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedObjectStorageCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedObjectStorageCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.serviceUuidInput">serviceUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.serviceUuid">serviceUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `serviceUuidInput`<sup>Optional</sup> <a name="serviceUuidInput" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.serviceUuidInput"></a>

```java
public java.lang.String getServiceUuidInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `serviceUuid`<sup>Required</sup> <a name="serviceUuid" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.serviceUuid"></a>

```java
public java.lang.String getServiceUuid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedObjectStorageCustomDomainConfig <a name="ManagedObjectStorageCustomDomainConfig" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.upcloud.managed_object_storage_custom_domain.ManagedObjectStorageCustomDomainConfig;

ManagedObjectStorageCustomDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .serviceUuid(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Must be a subdomain and consist of 3 to 5 parts such as objects.example.com. Cannot be root-level domain e.g. example.com. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.serviceUuid">serviceUuid</a></code> | <code>java.lang.String</code> | Managed Object Storage service UUID. |
| <code><a href="#@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.type">type</a></code> | <code>java.lang.String</code> | At the moment only `public` is accepted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Must be a subdomain and consist of 3 to 5 parts such as objects.example.com. Cannot be root-level domain e.g. example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#domain_name ManagedObjectStorageCustomDomain#domain_name}

---

##### `serviceUuid`<sup>Required</sup> <a name="serviceUuid" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.serviceUuid"></a>

```java
public java.lang.String getServiceUuid();
```

- *Type:* java.lang.String

Managed Object Storage service UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#service_uuid ManagedObjectStorageCustomDomain#service_uuid}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.managedObjectStorageCustomDomain.ManagedObjectStorageCustomDomainConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

At the moment only `public` is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.32.0/docs/resources/managed_object_storage_custom_domain#type ManagedObjectStorageCustomDomain#type}

---



