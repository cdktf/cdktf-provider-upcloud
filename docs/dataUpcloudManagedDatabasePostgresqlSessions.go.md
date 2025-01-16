# `dataUpcloudManagedDatabasePostgresqlSessions` Submodule <a name="`dataUpcloudManagedDatabasePostgresqlSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabasePostgresqlSessions <a name="DataUpcloudManagedDatabasePostgresqlSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions upcloud_managed_database_postgresql_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.NewDataUpcloudManagedDatabasePostgresqlSessions(scope Construct, id *string, config DataUpcloudManagedDatabasePostgresqlSessionsConfig) DataUpcloudManagedDatabasePostgresqlSessions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig">DataUpcloudManagedDatabasePostgresqlSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions"></a>

```go
func PutSessions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.putSessions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetId"></a>

```go
func ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.resetSessions"></a>

```go
func ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudManagedDatabasePostgresqlSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudManagedDatabasePostgresqlSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudManagedDatabasePostgresqlSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabasePostgresqlSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput">SessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessions"></a>

```go
func Sessions() DataUpcloudManagedDatabasePostgresqlSessionsSessionsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList">DataUpcloudManagedDatabasePostgresqlSessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.sessionsInput"></a>

```go
func SessionsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsConfig <a name="DataUpcloudManagedDatabasePostgresqlSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

&dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Id: *string,
	Limit: *f64,
	Offset: *f64,
	Order: *string,
	Sessions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service">Service</a></code> | <code>*string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit">Limit</a></code> | <code>*f64</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset">Offset</a></code> | <code>*f64</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order">Order</a></code> | <code>*string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions">Sessions</a></code> | <code>interface{}</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#service DataUpcloudManagedDatabasePostgresqlSessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#id DataUpcloudManagedDatabasePostgresqlSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#limit DataUpcloudManagedDatabasePostgresqlSessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#offset DataUpcloudManagedDatabasePostgresqlSessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#order DataUpcloudManagedDatabasePostgresqlSessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsConfig.property.sessions"></a>

```go
Sessions interface{}
```

- *Type:* interface{}

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#sessions DataUpcloudManagedDatabasePostgresqlSessions#sessions}

---

### DataUpcloudManagedDatabasePostgresqlSessionsSessions <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

&dataupcloudmanageddatabasepostgresqlsessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions {
	BackendXid: *f64,
	BackendXmin: *f64,
	ClientHostname: *string,
	XactStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid">BackendXid</a></code> | <code>*f64</code> | Top-level transaction identifier of this service, if any. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin">BackendXmin</a></code> | <code>*f64</code> | The current service's xmin horizon. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname">ClientHostname</a></code> | <code>*string</code> | Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart">XactStart</a></code> | <code>*string</code> | Time when this process' current transaction was started, or null if no transaction is active. |

---

##### `BackendXid`<sup>Optional</sup> <a name="BackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXid"></a>

```go
BackendXid *f64
```

- *Type:* *f64

Top-level transaction identifier of this service, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#backend_xid DataUpcloudManagedDatabasePostgresqlSessions#backend_xid}

---

##### `BackendXmin`<sup>Optional</sup> <a name="BackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.backendXmin"></a>

```go
BackendXmin *f64
```

- *Type:* *f64

The current service's xmin horizon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#backend_xmin DataUpcloudManagedDatabasePostgresqlSessions#backend_xmin}

---

##### `ClientHostname`<sup>Optional</sup> <a name="ClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.clientHostname"></a>

```go
ClientHostname *string
```

- *Type:* *string

Host name of the connected client, as reported by a reverse DNS lookup of `client_addr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#client_hostname DataUpcloudManagedDatabasePostgresqlSessions#client_hostname}

---

##### `XactStart`<sup>Optional</sup> <a name="XactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessions.property.xactStart"></a>

```go
XactStart *string
```

- *Type:* *string

Time when this process' current transaction was started, or null if no transaction is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.16.0/docs/data-sources/managed_database_postgresql_sessions#xact_start DataUpcloudManagedDatabasePostgresqlSessions#xact_start}

---

## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabasePostgresqlSessionsSessionsList <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.NewDataUpcloudManagedDatabasePostgresqlSessionsSessionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataUpcloudManagedDatabasePostgresqlSessionsSessionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get"></a>

```go
func Get(index *f64) DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabasepostgresqlsessions"

dataupcloudmanageddatabasepostgresqlsessions.NewDataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid">ResetBackendXid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin">ResetBackendXmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname">ResetClientHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart">ResetXactStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendXid` <a name="ResetBackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXid"></a>

```go
func ResetBackendXid()
```

##### `ResetBackendXmin` <a name="ResetBackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetBackendXmin"></a>

```go
func ResetBackendXmin()
```

##### `ResetClientHostname` <a name="ResetClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetClientHostname"></a>

```go
func ResetClientHostname()
```

##### `ResetXactStart` <a name="ResetXactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.resetXactStart"></a>

```go
func ResetXactStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart">BackendStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType">BackendType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort">ClientPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid">Datid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname">Datname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration">QueryDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart">QueryStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange">StateChange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename">Usename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid">Usesysid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent">WaitEvent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType">WaitEventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput">BackendXidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput">BackendXminInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput">ClientHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput">XactStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid">BackendXid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin">BackendXmin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname">ClientHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart">XactStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `BackendStart`<sup>Required</sup> <a name="BackendStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendStart"></a>

```go
func BackendStart() *string
```

- *Type:* *string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendType"></a>

```go
func BackendType() *string
```

- *Type:* *string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientAddr"></a>

```go
func ClientAddr() *string
```

- *Type:* *string

---

##### `ClientPort`<sup>Required</sup> <a name="ClientPort" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientPort"></a>

```go
func ClientPort() *f64
```

- *Type:* *f64

---

##### `Datid`<sup>Required</sup> <a name="Datid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datid"></a>

```go
func Datid() *f64
```

- *Type:* *f64

---

##### `Datname`<sup>Required</sup> <a name="Datname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.datname"></a>

```go
func Datname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryDuration`<sup>Required</sup> <a name="QueryDuration" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryDuration"></a>

```go
func QueryDuration() *string
```

- *Type:* *string

---

##### `QueryStart`<sup>Required</sup> <a name="QueryStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.queryStart"></a>

```go
func QueryStart() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateChange`<sup>Required</sup> <a name="StateChange" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.stateChange"></a>

```go
func StateChange() *string
```

- *Type:* *string

---

##### `Usename`<sup>Required</sup> <a name="Usename" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usename"></a>

```go
func Usename() *string
```

- *Type:* *string

---

##### `Usesysid`<sup>Required</sup> <a name="Usesysid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.usesysid"></a>

```go
func Usesysid() *f64
```

- *Type:* *f64

---

##### `WaitEvent`<sup>Required</sup> <a name="WaitEvent" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEvent"></a>

```go
func WaitEvent() *string
```

- *Type:* *string

---

##### `WaitEventType`<sup>Required</sup> <a name="WaitEventType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.waitEventType"></a>

```go
func WaitEventType() *string
```

- *Type:* *string

---

##### `BackendXidInput`<sup>Optional</sup> <a name="BackendXidInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXidInput"></a>

```go
func BackendXidInput() *f64
```

- *Type:* *f64

---

##### `BackendXminInput`<sup>Optional</sup> <a name="BackendXminInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXminInput"></a>

```go
func BackendXminInput() *f64
```

- *Type:* *f64

---

##### `ClientHostnameInput`<sup>Optional</sup> <a name="ClientHostnameInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostnameInput"></a>

```go
func ClientHostnameInput() *string
```

- *Type:* *string

---

##### `XactStartInput`<sup>Optional</sup> <a name="XactStartInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStartInput"></a>

```go
func XactStartInput() *string
```

- *Type:* *string

---

##### `BackendXid`<sup>Required</sup> <a name="BackendXid" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXid"></a>

```go
func BackendXid() *f64
```

- *Type:* *f64

---

##### `BackendXmin`<sup>Required</sup> <a name="BackendXmin" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.backendXmin"></a>

```go
func BackendXmin() *f64
```

- *Type:* *f64

---

##### `ClientHostname`<sup>Required</sup> <a name="ClientHostname" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.clientHostname"></a>

```go
func ClientHostname() *string
```

- *Type:* *string

---

##### `XactStart`<sup>Required</sup> <a name="XactStart" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.xactStart"></a>

```go
func XactStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabasePostgresqlSessions.DataUpcloudManagedDatabasePostgresqlSessionsSessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



